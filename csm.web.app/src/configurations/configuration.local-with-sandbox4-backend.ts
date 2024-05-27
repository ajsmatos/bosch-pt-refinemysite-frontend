/*
 * *************************************************************************
 *
 * Copyright: Robert Bosch Power Tools GmbH, 2022
 *
 * *************************************************************************
 */

import {EnvironmentConfig} from './interfaces/environment-config.interface';

export const configuration: EnvironmentConfig = {
    prodMode: false,
    projectImportMaxFileSize: 200,
    imageUploadMaxFileSize: 20,
    api: 'https://sandbox4-api.bosch-refinemysite.com/internal',
    apiAuth: 'https://sandbox4-api.bosch-refinemysite.com',
    features: [],
    projectExportExcelTemplateUrl: 'https://developer-preview.bosch-refinemysite.com/assets/excel/RefinemySiteExcelTemplate.zip',
};
