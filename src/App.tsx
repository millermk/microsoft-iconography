import React from 'react';
import { Stack, Fabric, FontSizes, Toggle } from 'office-ui-fabric-react';
import { getIcons } from './Icon';
import { IconPresenter } from './IconPresenter';

interface AppProps {}

interface AppState {
  groupingEnabled: boolean;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {groupingEnabled: false}
  }

  toggleGrouping = () => {
    this.setState({groupingEnabled: !this.state.groupingEnabled});
  }

  render() {
    return (
      <Fabric style={{margin: '0px 20px 0px 20px'}}>
        <Stack tokens={{childrenGap: "20px 0px"}}>
          <Stack.Item key="AppHeader">
            <h1>Microsoft Fluent Design Iconography</h1>
            <p>With the <a href="https://www.microsoft.com/design/fluent/">Fluent Design System</a>, Microsoft took a bold new approach to product icons and logos. Compared to the previous flat and monochromatic approach, the new style adds depth, color, and gradients. This page shows a selection of icons created under this new system.</p>
            <Toggle label="Grouping" checked={this.state.groupingEnabled} onText="On" offText="Off" onClick={this.toggleGrouping} />
          </Stack.Item>
          {
            getIcons(this.state.groupingEnabled).map(g => (
              <Stack.Item key={"IconGroup" + g.name}>
                <Stack horizontalAlign='start'>
                  <Stack.Item>
                    <h2>{g.name}</h2>
                  </Stack.Item>
                  <Stack.Item>
                  <Stack horizontal wrap horizontalAlign='start' tokens={{childrenGap: "20px 20px"}}>
                    {g.icons.map(i => (
                      <Stack.Item key={i.src}>
                        <IconPresenter icon={i}/>
                      </Stack.Item>
                    ))}
                  </Stack>
                  </Stack.Item>
                </Stack>
              </Stack.Item>
            ))
          }
        </Stack>
      </Fabric>
    );
  }
}
