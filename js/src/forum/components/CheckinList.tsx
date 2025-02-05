import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import type dayjs from 'dayjs';
import Button from 'flarum/common/components/Button';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import CheckinButton from './CheckinButton';
import icon from 'flarum/common/helpers/icon';
import load from 'external-load';

export default class CheckinList extends Component {
  sitekey =app.forum.attribute('fof-recaptcha.credentials.site');
  theme = app.forum.attribute('theme_dark_mode');
  type = app.forum.attribute('fof-recaptcha.type');
  size = app.forum.attribute('fof-recaptcha.type');
  oninit(vnode) {
    super.oninit(vnode);
    this.state = this.attrs.state;

  }

  oncreate(vnode) {
    super.oncreate(vnode);

    this.addResources().then(() => {
      const interval = setInterval(() => {
        if ((window as any).grecaptcha) {
          clearInterval(interval);
          const recaptchaContainer = vnode.dom.querySelector('.g-recaptcha') as HTMLElement;
          if (recaptchaContainer) {
            (window as any).grecaptcha.render(recaptchaContainer,{
              sitekey: this.sitekey,
              theme: this.theme,
              type: this.type,
              size: this.size,
              callback: this.callback,
            });
          }
        }
      }, 250);
    });

    // It's possible to TAB into the reCAPTCHA iframe, and it's very confusing when using the invisible mode
    if (this.attrs.state.type === 'invisible') {
      const iframe = vnode.dom.querySelector('iframe');

      if (iframe) {
        (iframe as HTMLIFrameElement).tabIndex = -1;
      }
    }
  }
  async addResources() {
    await new Promise<void>((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://www.recaptcha.net/recaptcha/api.js?render='+this.sitekey;
      script.onload = () => resolve();
      document.head.appendChild(script);
    });
  }
  getWeekdays() {
    // for China, Monday/day(1) is first day
    let displayDaysCount = 0;
    let startday;
    // if(app.forum.attribute('checkinConstant') === 1){
    //   displayDaysCount = app.forum.attribute('checkinConstantDays');
    //   startday = dayjs().subtract(displayDaysCount-1, 'day')
    // } else {
    //   startday = dayjs().day(1);
    //   displayDaysCount = 7;
    // }

    let todayNum = dayjs().day();
    if(todayNum === 0){
      todayNum = 7;
    }
    startday = dayjs().subtract(todayNum-1,'day');

    displayDaysCount = 7;

    const displayDays = [];
    displayDays.push(startday.format('YYYY-MM-DD'));

    let i = 1;
    while(i <= displayDaysCount){
      displayDays.push(startday.add(i, 'day').format('YYYY-MM-DD'));
      i++;
    }

    return displayDays;
  }

  view() {
    const checkins = this.state.cache || [];
    const allowCheckin = app.session.user.attribute("allowCheckin");
    const displayDays = this.getWeekdays();
    return (
      <div className="NotificationList CheckinList">
        <div className="NotificationList-header">
          <h4 className="App-titleControl App-titleControl--text">{app.translator.trans('gtdxyz-checkin.forum.reward-text')}</h4>
        </div>
        <div className="NotificationList-content">
          <ul className="NotificationGroup-content">
            {checkins.length > 0 ? (
              checkins.map((checkinItem,indx) => {
                const check_status = checkinItem.id()>0?'checked':'uncheck';

                return (
                  <li className={check_status + ' count-'+checkins.length} title={check_status}>

                        {checkinItem.id() > 0 ? (
                            <view>
                              <div className="Notification-content">
                                <span>
                                {dayjs(checkinItem.checkin_time()).format('MM/DD')}
                                </span>
                                <span>{dayjs(checkinItem.checkin_time()).format('ddd')}</span>
                              </div>
                              <div className="Notification-excerpt">
                                {icon('fas fa-star', { className: 'Notification-icon' })}
                              </div>
                            </view>
                        ) : (
                          <view>
                            <div className="Notification-content">
                              <span>
                              {dayjs(displayDays[indx]).format('MM/DD')}
                              </span>
                              <span>{dayjs(displayDays[indx]).format('ddd')}</span>
                            </div>
                            <div className="Notification-excerpt">

                              {dayjs().isAfter(displayDays[indx],'day') ? (
                                icon('fas fa-minus', { className: 'Notification-icon' })
                              ) : (
                                icon('far fa-star', { className: 'Notification-icon' })
                              )}

                            </div>
                          </view>
                        )}

                  </li>
                );

              })
            ) : !this.state.loading ? (
              <div className="NotificationList-empty">{app.translator.trans('gtdxyz-checkin.forum.empty-text')}</div>
            ) : (
              <LoadingIndicator className="LoadingIndicator--block" />
            )}

          </ul>
          <div className="subtitle">
            {app.translator.trans('gtdxyz-checkin.forum.count-text', {count: app.session.user.attribute('checkin_days_count')})} <br />
            {
              app.forum.attribute('checkinConstantForce')===1 && (
                app.translator.trans('gtdxyz-checkin.forum.constant-recent-count-text', {count: app.session.user.attribute('checkin_constant_count')})
              )
            }
          </div>
          <div className="Form-group">
            <div className="g-recaptcha" />
          </div>
          <div className="Form-group">
            {allowCheckin ? (
              <CheckinButton state='enabled' />
            ) : (
              <CheckinButton state="disabled" />
            )}
          </div>
        </div>
      </div>
    );
  }
}
