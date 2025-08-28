import { Background } from "@/components/Background"
import LoginModal from "@/components/LoginModal"

export const Login = () => {
  return (
    <Background>
      <LoginModal open={true} />
    </Background>
  );
}