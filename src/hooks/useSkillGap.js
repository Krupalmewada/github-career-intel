import { useMemo } from 'react'
import roleChecklists from '../data/roleChecklists'

export default function useSkillGap(repos, targetRole) {
  const userLang = new Map();
  
  const result = useMemo(() => {
   repos.forEach(element => {
    let arr = element.language 
        arr.forEach(element => {
            userLang.set(element, (userLang.get(element) || 0) + 1);
            
        });
   });
  }, [repos, targetRole])

  return result
}