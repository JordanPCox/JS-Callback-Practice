function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom, zIndex = 0) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
        element.style.zIndex = zIndex
    }

    function moveWithArrowKeys(left, bottom, onDirectionChange, zIndex = 0){
        let direction = null;
        let x = left;
        let y = bottom;
    
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west' && x > 0){
                x-=1
            }
            if(direction === 'north' && y < window.innerHeight){
                y+=1
            }
            if(direction === 'east' && x < window.innerWidth){
                x+=1
            }
            if(direction === 'south' && y > 0){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            onDirectionChange(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            onDirectionChange(direction)
        })
    }
    


    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}