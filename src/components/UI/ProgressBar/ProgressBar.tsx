import React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
	props?: LinearProgressProps;
	progressValue: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progressValue, props }) => {
	return (
		<Box className={styles.container}>
			<Box className={styles.bar}>
				<LinearProgress value={progressValue} variant={'determinate'} {...props} />
			</Box>
			<Box className={styles.value}>
				<Typography variant={'h5'}>{`${progressValue}%`}</Typography>
			</Box>
		</Box>
	);
};
