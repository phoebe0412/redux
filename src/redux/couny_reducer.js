/*
		1.該文件是用於創建一個為Count組件服務的reducer的本質就是一個函數
		2.reducer函數會接到兩個參數, 分別為: 之前的狀態(preState), 動作對象(action)
*/
const initState = 0 //初始化狀態
export default function countReducer(preState = initState, action){
	// console.log(preState);
	// 從action對象中獲取: type, data
	const { type, data } = action
	// 根據type決定如何加工數據
	switch (type){
		case 'increment': //如果是加
			return preState + data
		case 'decrement': //如果是減
			return preState - data
		default:
			return preState
	}
}