# https://school.programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
    var answer = 0;
    const skillOrder = new Map()
    skill.split('').map((e,i) => {
        skillOrder.set(e, skill[i+1] ? skill[i+1] : '0')
    })
    
    for(let i = 0 ; i < skill_trees.length; i++){
        
        const skillMap = new Map()
        skill.split('').map((e,i) => {
            if(i === 0){
                skillMap.set(e, 0)
            }
            else{
                skillMap.set(e, skillMap.get(e) ? skillMap.get(e)+1: 1)
            }
        })
        
        const arr = skill_trees[i].split('')
        let isOkay = true
        for(let j = 0; j < arr.length; j++){
           
            if(!skillOrder.get(arr[j])){
                continue
            }
            
            if(skillMap.get(arr[j]) !== 0){
                isOkay = false
                break
            }
            else{
                const next = skillOrder.get(arr[j])
                skillMap.set(next, skillMap.get(next)-1)
            }
        }
         if(isOkay){
            answer += 1
        }
    }
    return answer;
}