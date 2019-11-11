class StdFuben { 
    /** 字段名 */
    id: number;
    /** 副本id */
    fbid: number;
    /** 进入等级 */
    recommandLevel: number;
    /** 副本类型 */
    type: number;
    /** 配置 */
    enterCfg: any[] = [];
    /** 副本次数购买消耗 */
    buyTimesConsume: any[] = [];
    /** 退出副本描述 */
    exitDec: string;
    /** 退出时候是否保存位置 */
    exitPos: any[] = [];
}