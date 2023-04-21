import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Accueil.module.css';

const Accueil = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate('/accueil-3');
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/accueil-2');
    }, 1500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.accueil} onClick={onRectangle1Click}>
      <div className={styles.bienvenue}>Bienvenue</div>
    </div>
  );
};

export default Accueil;
