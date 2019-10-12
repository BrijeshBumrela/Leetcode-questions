const trap = (height) => {
    let left = 0;
    let right = height.length - 1;
    
    let maxLeft = 0;
    let maxRight = 0;
    
    let water = 0;
    
    while (left <= right) {
        // This if condition will make sure i'm taking the side which has minimum height
        if (height[left] <= height[right]) {
            if (height[left] >= maxLeft) {
                maxLeft = height[left];
            }
            else {
                water += maxLeft - height[left];
            }
            left++;
        }   
        else {
            if (height[right] >= maxRight) {
                maxRight = height[right];
            }
            else {
                water += maxRight - height[right];
            }
            right--;
        }
    }
    return water;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));