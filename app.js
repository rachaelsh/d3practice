//establish initial data

var data = [2,64,743,934,580,56,174,697,300]//can also be objects. dont forget to use data.key, or below, d.key

//enter and append data
d3.select(".bars")//d3 is the name of your library(like jquery and $)"go to .bars div"
.selectAll('div')//selecting all divs inside .bars div
.data(data)
.enter()//invokes d3 to be ready to work
.append('div')//these are what you are selecting above.  appends the length of your array in divs
.style("height", function(d,i){//d= data value in array, i = index value(position in array)
  return ((1/data.length)*100)-1 + "vh";//gives
})
// .style("margin-bottom", "1vh")
.style("width", function(d, i){
  // return d + "px";//data in pixels
  return( d/d3.max(data)*100 + "vw");//data in pixels
})
.style("background-color", function(d, i){//you can just do whatever color you want
  return d3.hsl(Math.random()*360, Math.random(), Math.random());  //hue, saturation luminance
})


//if you want to use values from a csv: .defer(d3.csv)
//if new data establish data
//put newdata() function here

data = [45,263,830,573,200,519,720,39,93]


// transition data

d3.select('.bars')
.selectAll('div')
.data(data)
.transition()
.duration(3000)
.style("width", function(d, i){
  // return d + "px";//data in pixel
  return( d/d3.max(data)*100 + "vw");//data in pixels
})
