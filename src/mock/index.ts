import Mock from 'mockjs';
import opration from './opration';  //知识总览

Mock.mock('/opration', 'post' ,opration.data); // 登录

export default Mock
