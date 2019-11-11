class StdVip { 
    /** 编号 */
    id: number;
    /** vip等级 */
    VipLevels: number;
    /** 所需经验 */
    upgradePoint: number;
    /** 专享礼包 */
    ExclusivePackage: any[] = [];
    /** 每日礼包 */
    DailyPackage: any[] = [];
    /** 每日礼包价值显示 */
    DailyNum: any;
    /** 文字描述 */
    des: any[] = [];
    /** 排序 */
    sort: any[] = [];
    /** 新增标签个数 */
    number: number;
    /** 世界boss额外购买次数 */
    WorldBoss: number;
    /** 经验副本额外购买次数 */
    expCopy: number;
    /** 材料副本扫荡次数 */
    cailiaoCopy: number;
    /** 幻羽升级增加次数 */
    wing: number;
    /** VIP挂机经验加成 */
    expadd: number;
    /** VIP挂机金币加成 */
    goldadd: number;
    /** VIP自动熔炼 */
    AutoSmelt: number;
    /** VIP竞技场购买次数加成 */
    arena: number;
    /** VIP属性 */
    attr: any[] = [];
    /** VIPbuffid */
    buffid: number;
    /** 炼狱boss额外购买次数 */
    PurgatoryBoss: number;
    /** 时装副本挑战次数 */
    fashionCopyNum: number;
    /** 时装副本额外购买次数 */
    fashionCopyBuyNum: number;
}