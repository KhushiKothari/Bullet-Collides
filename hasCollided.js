function hasCollided (ob1, ob2) {
  ob1RightEdge = ob1.x + ob1.width;
  ob2LeftEdge = ob2.x;
  
  if (ob1RightEdge>=ob2LeftEdge){
      return true;
      
      }
  return false;
  
}