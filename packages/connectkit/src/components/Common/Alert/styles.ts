import styled from 'styled-components';
import { motion } from 'framer-motion';
import defaultTheme from '../../../constants/defaultTheme';

export const AlertContainer = styled(motion.div)`
  display: flex;
  gap: 8px;
  position: relative;
  border-radius: 9px;
  margin: 0 auto;
  padding: 10px 12px;
  text-align: center;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  max-width: 260px;
  min-width: 100%;

  border-radius: var(--ck-alert-border-radius, 12px);
  color: var(--ck-alert-color, var(--ck-body-color-muted));
  background: var(--ck-alert-background, var(--ck-body-background-secondary));
  box-shadow: var(--ck-alert-box-shadow, var(--ck-body-box-shadow));

  @media only screen and (max-width: ${defaultTheme.mobileWidth}px) {
    padding: 16px 32px;
    font-size: 16px;
    line-height: 21px;
    margin: 0 4px -2px;
    border-radius: 24px;
    text-align: center;
  }
`;

export const IconContainer = styled(motion.div)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;
