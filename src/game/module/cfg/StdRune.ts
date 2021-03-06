class StdRune { 
    /** 角色限制 */
    roleLimit: string;
    /** 编号 */
    id: number;
    /** 阶级 */
    classLevel: number;
    /** 星级 */
    starLevel: number;
    /** 培养增加经验 */
    addExp: number;
    /** 升级所需经验值 */
    upExp: number;
    /** 培养道具消耗 */
    item: any[] = [];
    /** 每级增加属性 */
    attrs: any[] = [];
    /** 激活符碑外观id */
    Appearance: number;
}