class Floor {
	private row: number;
	private col: number;
	private table: HTMLTableElement;
	private parents: HTMLElement;
	public blocks: Block[];//白色方块
	private walls: Block[];
	private snakeBody: Block[];

	public constructor() {
		this.table = document.createElement('table');
		this.parents = document.body;
		this.row = 20;
		this.col = 20;
		this.blocks = [];
		this.walls = [];//墙
	}

	//绘制地图
	public init(){
		let x: number,y: number;
		for( y = 0; y < this.row; y++){
			let tr = <HTMLTableRowElement>this.table.insertRow(-1);
			for( x = 0; x < this.col; x++){
				let td = <HTMLTableCellElement>tr.insertCell(-1);
				//外围绘制成墙
				if(x == 0 || y == 0 || y == this.row - 1 || x == this.col - 1){
					td.className = FLOOR.WALL;
					this.walls.push({
						node: td,
						position: { x: x, y: y},
						type: FLOOR.WALL,
						})
				}else{
					td.className = FLOOR.SPACE;
					this.blocks.push(
					{
						node: td,
						position: { x: x, y: y},
						type: FLOOR.SPACE,
				});
				}
				
			}
		}
		this.parents.appendChild(this.table);
	}

}