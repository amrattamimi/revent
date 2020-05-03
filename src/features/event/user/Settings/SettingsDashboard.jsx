import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import SettingsNav from './SettingsNav'
import { Route, Redirect, Switch } from 'react-router-dom'
import BasicPage from './BasicPage'
import AccountPage from './AccountPage'
import PhotosPage from './PhotosPage'
import AboutPage from './AboutPage'

 const SettingsDashboard = () => {
    return (
            <Grid>
                <GridColumn width={12}>
                    <Switch>
                    <Redirect exact from='/settings' to='/settings/basic'/>
                    <Route path="/settings/basic" component={BasicPage}/>
                    <Route path="/settings/about" component={AboutPage}/>
                    <Route path="/settings/photos" component={PhotosPage}/>
                    <Route path="/settings/account" component={AccountPage}/>
                    </Switch>
                </GridColumn>
                <GridColumn width={10}>
                    <SettingsNav/>
                </GridColumn>
            </Grid>
            
    )
}
export default SettingsDashboard