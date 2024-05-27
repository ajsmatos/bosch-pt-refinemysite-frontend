/*
 * *************************************************************************
 *
 * Copyright: Robert Bosch Power Tools GmbH, 2020
 *
 * *************************************************************************
 */

import {ProjectPictureResource} from '../../app/project/project-common/api/projects/resources/project-picture.resource';
import {ResourceReference} from '../../app/shared/misc/api/datatypes/resource-reference.datatype';
import {ResourceReferenceWithPicture} from '../../app/shared/misc/api/datatypes/resource-reference-with-picture.datatype';

export const PROJECT_PICTURE_1: ProjectPictureResource = {
    id: '1',
    width: 1000,
    height: 1000,
    fileSize: 34893,
    projectReference: new ResourceReference('1', 'Super Project'),

    createdBy: new ResourceReferenceWithPicture('1', 'Bob Baumeister', ''),
    createdDate: '2016-10-01T00:00:00.000Z',
    lastModifiedBy: new ResourceReference('1', 'Bob Baumeister'),
    lastModifiedDate: '2016-10-01T00:00:00.000Z',

    _links: {
        self: {
            href: 'self'
        },
        small: {
            href: 'small'
        },
        full: {
            href: 'full'
        }
    }
};
