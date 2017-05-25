/**
 * accountName: string, displayName: string, avatarUrl:string, content:string, systemFlag: boolean
 */
export class TootModel {

  displayName: string;
  accountName: string;
  avatarUrl: string;
  content: string;
  systemFlag: boolean;

  /**
   * @param accountName
   * @param displayName
   * @param avatarUrl
   * @param content
   * @param systemFlag
   */
  constructor(accountName: string, displayName: string, avatarUrl:string, content:string, systemFlag: boolean) {
    this.accountName = accountName;
    this.displayName = displayName;
    this.avatarUrl = avatarUrl;
    this.content = content;
    this.systemFlag = systemFlag;
  }
}
