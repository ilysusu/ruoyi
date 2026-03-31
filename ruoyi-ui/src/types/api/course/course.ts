import type { PageDomain, BaseEntity } from "../common";

/** 课程管理配置分页查询参数 */
export interface CourseQueryParams extends PageDomain {
  /** 课程编码 */
  code?: string;
  /** 课程学科 */
  subject?: string;
  /** 课程名称 */
  name?: string;
  /** 适用人群 */
  applicablePerson?: string;
}

/** 课程管理配置信息 */
export interface Course extends BaseEntity {
  /** 课程id */
  id?: number;
  /** 课程编码 */
  code?: string;
  /** 课程学科 */
  subject?: string;
  /** 课程名称 */
  name?: string;
  /** 价格（元） */
  price?: number;
  /** 适用人群 */
  applicablePerson?: string;
  /** 课程介绍 */
  info?: string;
  /** 创建时间 */
  createTime?: string;
  /** 更新时间 */
  updateTime?: string;
}
