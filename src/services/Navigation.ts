import { NavigationModel } from '@/model/Navigation'

class NavigationService
{
    private navigations: NavigationModel[] = []

    addNavigation(navigation: NavigationModel): void
    {
        this.navigations.push(navigation)
    }

    getNavigation(): NavigationModel[]
    {
        return this.navigations
    }
}

export default new NavigationService()
