// 로그인한 사용자만 접근할 수 있는 페이지가 있으며 이를 위해 이미 useAuth라는 훅을 만듦

export default function useAuth() {
  return { loggedIn: false };
}
