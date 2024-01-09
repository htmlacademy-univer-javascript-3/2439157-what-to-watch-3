import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { DATE_FORMAT } from './const';
dayjs.extend(duration);

export const formatReviewDate = (date: string) => dayjs(date).format(DATE_FORMAT);
