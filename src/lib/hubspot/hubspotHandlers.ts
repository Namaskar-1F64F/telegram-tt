import type { ApiChatMember, ApiUser } from '../../api/types';
import { getGlobal } from '../../global';
import { selectUser } from '../../global/selectors';
import type { GlobalState } from '../../global/types';

const callEndpoint = async (global: GlobalState, payload: any) => {
  const { hubspotAccessToken, hubspotProxyURI } = global.settings.byKey;
  if (!hubspotAccessToken || !hubspotProxyURI) return;
  await fetch(hubspotProxyURI, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${hubspotAccessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};
export function pushSingleContactToHubspot(title: string, user: ApiUser) {
  const contacts: any[] = [
    {
      properties: {
        telegram_id: user.id,
        telegram_username: user?.usernames?.[0].username || 'no-username',
        firstname: user?.firstName,
        lastname: user?.lastName,
        phone: user?.phoneNumber,
        website: `${user?.usernames?.[0].username}.t.me`,
      },
    },
  ];
  const global = getGlobal();
  callEndpoint(global, { title, contacts });
}

export function pushGroupsContactsToHubspot(title: string, members: ApiChatMember[]) {
  const global = getGlobal();
  const contacts = members?.map((member) => {
    const chatMember = selectUser(global, member.userId);
    return {
      properties: {
        telegram_id: chatMember?.id || '',
        telegram_username: chatMember?.usernames?.[0].username || 'no-username',
        firstname: chatMember?.firstName,
        lastname: chatMember?.lastName,
        phone: chatMember?.phoneNumber,
        website: `${chatMember?.usernames?.[0].username}.t.me`,
      },
    };
  });
  callEndpoint(global, { title, contacts });
}
