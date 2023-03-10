const outputs = [
  
  [10,.5,16,1],
  [200,.5,16,4],
  [350,.5,16,4],
  [600,.5,16,5]
  
 ];

//[ [dropPosition, bounciness, ball_size, bucket] ]

//Step 1 : For each observation, subtract the drop point from 300px, and then take the abs value of that

const predictionPoint = 300;
const k = 3;

function distance(point){
 return Math.abs(point-predictionPoint); 
}

_.chain(outputs)
	.map(row => [distance(row[0]),row[3]])
	.sortBy(row => row[0])
	.slice(0,k)
	.countBy(row => row[1])
	.toPairs()
	.sortBy(row => row[1])
	.last()
	.first()
	.parseInt()
	.value();
