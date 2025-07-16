import { ActionButton } from "../../components/Button/ActionButton";
import { PageContainer } from "../../components/Common/PageContainer.style";
import { notification } from "../../data/notification.json";
import { NotificationItem } from "../components/NotificationItem";
import { Header } from "./NotificationPage.style";
export const NotificationPage = () => {
  return (
    <PageContainer $padding={"0"} height={"100vh"}>
      <Header>
        <div className="inner">
          <ActionButton title="뒤로 가기" iconType="backArrow" />
          <h1>알림</h1>
          <ActionButton title="더보기" iconType="more" />
        </div>
      </Header>

      <main>
        <h2 className="blind">전체 알림</h2>
        {notification.map((el) => (
          <NotificationItem {...el} key={el.id} />
        ))}
      </main>
    </PageContainer>
  );
};
