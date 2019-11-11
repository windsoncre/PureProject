class StdWing { 
    /** 编号 */
    id: string;
    /** 阶级 */
    classLvl: number;
    /** 星级 */
    starlevel: number;
    /** 每阶最大星级 */
    maxStar: number;
    /** 培养增加经验 */
    addExp: number;
    /** 升级所需经验值 */
    wingExp: number;
    /** 培养道具消耗 */
    consumeItems: any[] = [];
    /** 培养金币消耗 */
    consumeGold: any[] = [];
    /** 每级增加属性 */
    levelAtt: any[] = [];
    /** 激活翅膀外观id */
    wingAppearance: any[] = [];
}