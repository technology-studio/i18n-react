/**
 * @Author: Erik Slovák <erik.slovak@technologystudio.sk>
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2019-04-10T10:04:00+02:00
 * @Copyright: Technology Studio
**/

import { isNotEmptyString } from '@txo/types'
import i18next from 'i18next'

const NOT_LOCALIZED = '@NOT_LOCALIZED'

export const getLocalization = ({ text, textLocalizationKey }: { text?: string, textLocalizationKey?: string }): string => (
  isNotEmptyString(text)
    ? text
    : isNotEmptyString(textLocalizationKey)
      // eslint-disable-next-line import/no-named-as-default-member
      ? i18next.t(textLocalizationKey)
      : NOT_LOCALIZED
)
