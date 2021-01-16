import { PageContent } from '@components/layout';
import { GoogleLogin } from 'react-google-login';

import { Text } from '@medly-components/core';
import React from 'react';
import { Props } from './types';

export const Dashboard: React.SFC<Props> = ({ isLoading }) => {
    const responseGoogle = (response: object) => {
        console.log(response);
    }
    const clientId = '734655008898-ac7u7rbuq37fs24dt94482bodisfdrlv.apps.googleusercontent.com'
    return(
        <PageContent isLoading={isLoading}>
            <Text textWeight='Strong' textVariant='body1'>
                <GoogleLogin
                    clientId={clientId}
                    buttonText='Login'
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </Text>
        </PageContent>
)};
