import { USER_LIST } from './user.mocks';
import { Repository } from './../models/repository.interface';

const repositoryList: Repository[] = [
    {
        name: 'Inoic 3 Camera',
        description: 'This shows the usage of camera within Inoic 3.',
        owner: USER_LIST[0]
    },
    {
        name: 'Inoic 3 SMS',
        description: 'This shows the usage of SMS within Inoic 3.',
        owner: USER_LIST[0]
    },
    {
        name: 'Inoic 3 Geolocation',
        description: 'This shows the usage of gEOLOCATION within Inoic 3.',
        owner: USER_LIST[1]
    },
    {
        name: 'Inoic 3 MICROPHONE',
        description: 'This shows the usage of Microphone within Inoic 3.',
        owner: USER_LIST[1]
    },
]

export const REPOSITORY_LIST = repositoryList;