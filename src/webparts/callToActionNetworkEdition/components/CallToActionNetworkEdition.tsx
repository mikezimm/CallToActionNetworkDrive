import * as React from 'react';
import styles from './CallToActionNetworkEdition.module.scss';
import { ICallToActionNetworkEditionProps } from './ICallToActionNetworkEditionProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class CallToActionNetworkEdition extends React.Component<ICallToActionNetworkEditionProps, {}> {
  public render(): React.ReactElement<ICallToActionNetworkEditionProps> {
    return (
      <div className={ styles.callToActionNetworkEdition }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Test open new location</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a onClick = { this.onTestClick.bind(this)} className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
              <div onClick = { this.onTestClick.bind(this)} className={ styles.button }>
                <span className={ styles.label }>Div not link</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private onTestClick() {
    let link = 'http://alvc-sputil01.alv.autoliv.int/Static/MZTest/SingleProcess.html';
    alert(link);
    window.open(link,'_blank');
    // window.open(link,'_blank');

    // var URL = encodeURIComponent(link);
    // window.open(enc);
  }
}
