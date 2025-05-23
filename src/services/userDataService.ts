
import { useAuth } from "@/contexts/AuthContext";

// Service to handle user-specific data
const useUserDataService = () => {
  const { currentUser } = useAuth();
  
  const getUserId = () => {
    return currentUser?.id || 'guest';
  };
  
  // Save atendimentos with user ID
  const saveAtendimentos = (atendimentos: any[]) => {
    const userId = getUserId();
    
    // Get all user data
    const allUserData = JSON.parse(localStorage.getItem('userData') || '{}');
    
    // Update this user's data
    allUserData[userId] = {
      ...allUserData[userId],
      atendimentos,
    };
    
    // Save back to localStorage
    localStorage.setItem('userData', JSON.stringify(allUserData));
  };
  
  // Get atendimentos for current user
  const getAtendimentos = () => {
    const userId = getUserId();
    const allUserData = JSON.parse(localStorage.getItem('userData') || '{}');
    return (allUserData[userId]?.atendimentos || []);
  };
  
  // Save tarot analyses with user ID
  const saveTarotAnalyses = (analyses: any[]) => {
    const userId = getUserId();
    
    // Get all user data
    const allUserData = JSON.parse(localStorage.getItem('userData') || '{}');
    
    // Update this user's data
    allUserData[userId] = {
      ...allUserData[userId],
      tarotAnalyses: analyses,
    };
    
    // Save back to localStorage
    localStorage.setItem('userData', JSON.stringify(allUserData));
  };
  
  // Get tarot analyses for current user
  const getTarotAnalyses = () => {
    const userId = getUserId();
    const allUserData = JSON.parse(localStorage.getItem('userData') || '{}');
    return (allUserData[userId]?.tarotAnalyses || []);
  };
  
  return {
    saveAtendimentos,
    getAtendimentos,
    saveTarotAnalyses,
    getTarotAnalyses,
  };
};

export default useUserDataService;
