import { Authenticator  } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import config from '../../aws-exports';

Amplify.configure({...config, ssr: true});

const AwsProvider = ({children}) => (
  <Authenticator.Provider>
    {children}
  </Authenticator.Provider>
);

export default AwsProvider;