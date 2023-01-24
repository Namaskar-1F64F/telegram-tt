import type { ChangeEvent } from 'react';
import type { FC } from '../../../lib/teact/teact';
import React, {
  useCallback, memo, useState, useMemo,
} from '../../../lib/teact/teact';
import { getActions, withGlobal } from '../../../global';

import type { ISettings } from '../../../types';

import { pick } from '../../../util/iteratees';
import useLang from '../../../hooks/useLang';
import useHistoryBack from '../../../hooks/useHistoryBack';

import InputText from '../../ui/InputText';
import FloatingActionButton from '../../ui/FloatingActionButton';

type OwnProps = {
  isActive?: boolean;
  onReset: () => void;
};

type StateProps =
  Pick<ISettings, (
    'hubspotAccessToken'
  )> & {
    theme: ISettings['theme'];
    shouldUseSystemTheme: boolean;
  };

const SettingsHubspot: FC<OwnProps & StateProps> = ({
  isActive,
  onReset,
  hubspotAccessToken,
}) => {
  const [error, setError] = useState<string | undefined>();
  const [isFieldsTouched, setIsFieldsTouched] = useState(false);
  const [newAccessToken, setNewAccessToken] = useState(hubspotAccessToken || '');

  const {
    setSettingOption,
  } = getActions();

  const lang = useLang();

  const isSaveButtonShown = useMemo(() => {
    if (error) {
      return false;
    }

    return isFieldsTouched;
  }, [error, isFieldsTouched]);

  const handleSave = useCallback(() => {
    setSettingOption({ hubspotAccessToken: newAccessToken });
    setIsFieldsTouched(false);
  }, [newAccessToken, setSettingOption]);

  const handleHubspotAccessTokenChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value === '') {
      setError('HubspotAccessToken is required');
    }
    setNewAccessToken(value);
    setIsFieldsTouched(true);
  }, []);

  useHistoryBack({
    isActive,
    onBack: onReset,
  });

  return (
    <div className="settings-content custom-scroll">
      <div className="settings-item pt-3">
        <h4 className="settings-item-header" dir={lang.isRtl ? 'rtl' : undefined}>{lang('HubspotSettings')}</h4>
        <InputText
          value={newAccessToken}
          onChange={handleHubspotAccessTokenChange}
          label={lang('HubspotAccessToken')}
          error={error === '' ? error : undefined}
        />

      </div>
      <FloatingActionButton
        isShown={isSaveButtonShown}
        onClick={handleSave}
        ariaLabel={lang('Save')}
      >
        <i className="icon-check" />
      </FloatingActionButton>
    </div>
  );
};

export default memo(withGlobal<OwnProps>(
  (global): StateProps => {
    const { theme, shouldUseSystemTheme } = global.settings.byKey;

    return {
      ...pick(global.settings.byKey, [
        'hubspotAccessToken',
      ]),
      theme,
      shouldUseSystemTheme,
    };
  },
)(SettingsHubspot));
