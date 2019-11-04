export interface Icon {
    src: string;
    name: string;
}

export interface IconGroup {
    icons: Icon[];
    name: string;
}

export function getIcons(grouped: boolean): IconGroup[] {
    let icons =  [
        {
            name: "Office",
            icons: [
                {
                    name: "Office",
                    src: "/public/assets/images/office.png"
                },
                {
                    name: "Access",
                    src: "/public/assets/images/office-access.svg"
                },
                {
                    name: "Excel",
                    src: "/public/assets/images/office-excel.svg"
                },
                {
                    name: "Exchange",
                    src: "/public/assets/images/office-exchange.svg"
                },
                {
                    name: "OneNote",
                    src: "/public/assets/images/office-onenote.svg"
                },
                {
                    name: "Outlook",
                    src: "/public/assets/images/office-outlook.svg"
                },
                {
                    name: "PowerPoint",
                    src: "/public/assets/images/office-powerpoint.svg"
                },
                {
                    name: "SharePoint",
                    src: "/public/assets/images/office-sharepoint.svg"
                },
                {
                    name: "Sway",
                    src: "/public/assets/images/office-sway.png"
                },
                {
                    name: "Teams",
                    src: "/public/assets/images/office-teams.svg"
                },
                {
                    name: "Visio",
                    src: "/public/assets/images/office-visio.svg"
                },
                {
                    name: "Word",
                    src: "/public/assets/images/office-word.svg"
                },
                {
                    name: "Project",
                    src: "/public/assets/images/office-project.svg"
                },
                {
                    name: "Forms",
                    src: "/public/assets/images/office-forms.svg"
                },
                {
                    name: "Publisher",
                    src: "/public/assets/images/office-publisher.svg"
                },
                {
                    name: "Planner",
                    src: "/public/assets/images/office-planner.svg"
                },
                {
                    name: "Stream",
                    src: "/public/assets/images/office-stream.svg"
                },
                {
                    name: "Todo",
                    src: "/public/assets/images/office-todo.svg"
                },
                {
                    name: "Whiteboard",
                    src: "/public/assets/images/office-whiteboard.svg"
                },
                {
                    name: "Skype",
                    src: "/public/assets/images/office-skype.svg"
                },
                {
                    name: "OneDrive",
                    src: "/public/assets/images/office-onedrive.svg"
                }
            ]
        },
        {
            name: "Dynamics 365",
            icons: [
                {
                    name: "Dynamics 365 Business Central",
                    src: "/public/assets/images/dynamics-365businesscentral.png"
                },
                {
                    name: "Dynamics 365 Guides",
                    src: "/public/assets/images/dynamics-365guides.png"
                },
                {
                    name: "Dynamics 365 Layout",
                    src: "/public/assets/images/dynamics-365layout.png"
                },
                {
                    name: "Dynamics 365 Import Tool",
                    src: "/public/assets/images/dynamics-365importtool.png"
                },
                {
                    name: "Dynamics 365 Remote Assist",
                    src: "/public/assets/images/dynamics-365remoteassist.png"
                },
                {
                    name: "Dynamics 365 Product Visualize",
                    src: "/public/assets/images/dynamics-365productvisualize.png"
                }
            ]
        },
        {
            name: "Windows",
            icons: [
                {
                    name: "Mail",
                    src:"/public/assets/images/win-mail.png"
                },
                {
                    name: "Calendar",
                    src:"/public/assets/images/win-calendar.png"
                },
                {
                    name: "People",
                    src:"/public/assets/images/win-people.png"
                },
                {
                    name: "Groove Music",
                    src:"/public/assets/images/win-groove.png"
                },
                {
                    name: "Movies & TV",
                    src:"/public/assets/images/win-moviestv.png"
                },
                {
                    name: "Photos",
                    src:"/public/assets/images/win-photos.png"
                },
                {
                    name: "Calculator",
                    src:"/public/assets/images/win-calculator.png"
                },
                {
                    name: "Camera",
                    src:"/public/assets/images/win-camera.png"
                },
                {
                    name: "Clock",
                    src:"/public/assets/images/win-clock.png"
                },
                {
                    name: "Recorder",
                    src:"/public/assets/images/win-recorder.png"
                },
                {
                    name: "Snip & Sketch",
                    src:"/public/assets/images/win-snipnsketch.png"
                },
                {
                    name: "Cellular",
                    src:"/public/assets/images/win-cellular.png"
                },
                {
                    name: "Your Phone",
                    src:"/public/assets/images/win-yourphone.png"
                },
                {
                    name: "Maps",
                    src:"/public/assets/images/win-maps.png"
                },
                {
                    name: "Weather",
                    src:"/public/assets/images/win-weather.png"
                },
                {
                    name: "Solitaire",
                    src:"/public/assets/images/win-solitaire.png"
                },
                {
                    name: "Microsoft Edge",
                    src:"/public/assets/images/win-edge.png"
                },
                {
                    name: "Explorer",
                    src:"/public/assets/images/win-explorer.png"
                },
                {
                    name: "Feedback",
                    src:"/public/assets/images/win-feedback.png"
                }
            ]
        },
        {
            name: "Developer Tools",
            icons: [
                {
                    name: "Terminal",
                    src:"/public/assets/images/win-terminal.png"
                },
                {
                    name: "Visual Studio Code",
                    src:"/public/assets/images/win-vscode.png"
                },
                {
                    name: "Visual Studio",
                    src:"/public/assets/images/win-visualstudio.svg"
                }
            ]
        },
        {
            name: "Mobile",
            icons: [
                {
                    name: "Launcher",
                    src:"/public/assets/images/mobile-launcher.png"
                },
                {
                    name: "Managed Home Screen",
                    src:"/public/assets/images/mobile-enterpriselauncher.png"
                },
                {
                    name: "Your Phone Companion",
                    src:"/public/assets/images/mobile-yourphonecompanion.png"
                },
                {
                    name: "Hyperlapse",
                    src:"/public/assets/images/mobile-hyperlapse.png"
                },
                {
                    name: "Bing Advertising",
                    src:"/public/assets/images/mobile-advertising.png"
                },
                {
                    name: "Kaizala",
                    src:"/public/assets/images/mobile-kaizala.png"
                },
                {
                    name: "Mail",
                    src:"/public/assets/images/mobile-mail.png"
                },
                {
                    name: "Calendar",
                    src:"/public/assets/images/mobile-calendar.png"
                }
            ]
        }
    ]

    return grouped ? icons : [{name: "All", icons: icons.flatMap(g => g.icons)}];
}