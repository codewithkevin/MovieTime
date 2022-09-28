import AuthStack from "./AuthStack";
import { useAuthentication } from './../hooks/useAuthentication';
import StackNav from './StackNavigation';

export default function RootNavigation() {
  const { user } = useAuthentication();

  return user ? <StackNav /> : <AuthStack />;
}
