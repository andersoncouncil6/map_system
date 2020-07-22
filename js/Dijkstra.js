function Dijkstra(matrix, start) {
	if(matrix && matrix.length == matrix[0].length && start < matrix.length) {
		let n = matrix.length; // 顶点个数
		let dis = new Array(n); // start到各个顶点的最短距离
		let path = new Array(n); // start到各个顶点的最短路径
		let visited = new Array(n); // start到各个顶点的最短距离是否已求得
		for(let i = 0;i < n;i++) {
			path[i] = start + "->" + i;
		}
		dis[start] = 0; // start到自身的最短距离为0
		visited[start] = true;
		for(let i = 1;i < n;i++) {
			let min = Infinity; // 初始化最短距离
			let minIndex = -1; // 初始化距离start最短的顶点下标
			for(let j = 0;j < n;j++) {
				if(!visited[j] && matrix[start][j] < min) {
					min = matrix[start][j];
					minIndex = j;
				}
			}
			dis[minIndex] = min;
			visited[minIndex] = true;
			for(let k = 0;k < n;k++) {
				if(!visited[k] && matrix[start][minIndex] + matrix[minIndex][k] < matrix[start][k]) {
					matrix[start][k] = matrix[start][minIndex] + matrix[minIndex][k];
					path[k] = path[minIndex] + "->" + k;
				}
			}
		}
		// for(let i = 0;i < n;i++) {
		// 	console.log("顶点"+start+"到顶点"+i+"的最短距离为：" + dis[i]);
		// 	console.log("顶点"+start+"到顶点"+i+"的最短路径为：" + path[i]);
		// }
		return [dis, path];
	}
	else {
		throw new Error("邻接矩阵或起点有误！");
	}
}