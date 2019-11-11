class StdArena { 
    /** 数据id */
    id: number;
    /** 参与次数 */
    freeTimes: number;
    /** 普通购买次数 */
    consumeTimes: number;
    /** 购买消耗 */
    consume: any[] = [];
    /** 恢复时间 */
    recover: number;
    /** 参与奖励 */
    award: any[] = [];
    /** 参与奖励展示 */
    awardshow: any[] = [];
    /** 胜利积分 */
    winpoint: number;
    /** 连胜积分 */
    awardpoint: any[] = [];
    /** 排名奖励（1-10） */
    rankaward: any[] = [];
    /** 刷新CD */
    refreshCD: number;
    /** 场景ID */
    sceneID: number;
    /** 副本ID */
    fubenID: number;
    /** 出生点 */
    startPos: any[] = [];
}