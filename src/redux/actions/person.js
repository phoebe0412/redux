import {ADD_PERSON} from '../constant'

// 創建增加一個人的action動作對象
export const creatAddPersonAction = personsObj => ({type:ADD_PERSON, data:personsObj})