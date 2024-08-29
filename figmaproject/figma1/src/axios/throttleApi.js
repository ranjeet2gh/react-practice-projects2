import throttle from 'lodash.throttle';
import axiosInstance from './axiosInstance';

export const throttledFetch = throttle(async () => {
    const response = await axiosInstance.get('/form/get-meeting-link')
    return await response.data;
},1000); // Throttle to 1 API call per second