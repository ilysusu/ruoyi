import request from '@/utils/request'
import type { AjaxResult, TableDataInfo, CourseQueryParams, Course } from '@/types'

// 查询课程管理列表
export function listCourse(query: CourseQueryParams): Promise<TableDataInfo<Course[]>> {
  return request({
    url: '/course/course/list',
    method: 'get',
    params: query
  })
}

// 查询课程管理详细
export function getCourse(id: number): Promise<AjaxResult<Course>> {
  return request({
    url: '/course/course/' + id,
    method: 'get'
  })
}

// 新增课程管理
export function addCourse(data: Course): Promise<AjaxResult> {
  return request({
    url: '/course/course',
    method: 'post',
    data: data
  })
}

// 修改课程管理
export function updateCourse(data: Course): Promise<AjaxResult> {
  return request({
    url: '/course/course',
    method: 'put',
    data: data
  })
}

// 删除课程管理
export function delCourse(id: number | number[]): Promise<AjaxResult> {
  return request({
    url: '/course/course/' + id,
    method: 'delete'
  })
}


