class StdBarrierpassaward { 
    /** 字段名 */
    id: number;
    /** 起始关卡 */
    start: number;
    /** 结束关卡 */
    end: number;
    /** 经验基础值 */
    exp: number;
    /** 经验系数 */
    expup: number;
    /** 金币基础值 */
    gold: number;
    /** 挂机金币系数 */
    goldup: number;
    /** 过关掉落组 */
    drop_id: any[] = [];
    /** 过关奖励展示 */
    awardshow: any[] = [];
    /** 挂机掉落组 */
    hang_drop: any[] = [];
    /** 每分钟经验金币奖励次数 */
    awardcount: number;
    /** 掉落间隔 */
    dropcount: number;
}