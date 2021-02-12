import { colors } from './colors'
import { spacing } from './spacing'

export const container = {
    flex: 1,
    padding: spacing.xs

}

export const wrapper = {
    padding: spacing.s,
    backgroundColor: colors.White

}

export const containerRow = {
    ...container,
    flexDirection: 'row',
    alignItems: 'center'
}

export const wrapperRow = {
    ...wrapper,
    flexDirection: 'row',
    alignItems: 'center'
}

export const containerRowSpaceBetween = {
    ...containerRow,
    justifyContent: 'space-between'
}

export const wrapperRowSpaceBetween = {
    ...wrapperRow,
    justifyContent: 'space-between'
}

export const shadow = {
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    backgroundColor: colors.White,
    shadowOffset: {
        width: 0, height: 0
    }
}