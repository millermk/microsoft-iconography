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
                    src: "/public/static/office.png"
                },
                {
                    name: "Access",
                    src: "/public/static/office-access.svg"
                },
                {
                    name: "Excel",
                    src: "/public/static/office-excel.svg"
                },
                {
                    name: "Exchange",
                    src: "/public/static/office-exchange.svg"
                },
                {
                    name: "OneNote",
                    src: "/public/static/office-onenote.svg"
                },
                {
                    name: "Outlook",
                    src: "/public/static/office-outlook.svg"
                },
                {
                    name: "PowerPoint",
                    src: "/public/static/office-powerpoint.svg"
                },
                {
                    name: "SharePoint",
                    src: "/public/static/office-sharepoint.svg"
                },
                {
                    name: "Sway",
                    src: "/public/static/office-sway.png"
                },
                {
                    name: "Teams",
                    src: "/public/static/office-teams.svg"
                },
                {
                    name: "Visio",
                    src: "/public/static/office-visio.svg"
                },
                {
                    name: "Word",
                    src: "/public/static/office-word.svg"
                },
                {
                    name: "Project",
                    src: "/public/static/office-project.svg"
                },
                {
                    name: "Forms",
                    src: "/public/static/office-forms.svg"
                },
                {
                    name: "Publisher",
                    src: "/public/static/office-publisher.svg"
                },
                {
                    name: "Planner",
                    src: "/public/static/office-planner.svg"
                },
                {
                    name: "Stream",
                    src: "/public/static/office-stream.svg"
                },
                {
                    name: "Todo",
                    src: "/public/static/office-todo.svg"
                },
                {
                    name: "Whiteboard",
                    src: "/public/static/office-whiteboard.svg"
                },
                {
                    name: "Skype",
                    src: "/public/static/office-skype.svg"
                },
                {
                    name: "OneDrive",
                    src: "/public/static/office-onedrive.svg"
                }
            ]
        },
        {
            name: "Dynamics 365",
            icons: [
                {
                    name: "Dynamics 365 Business Central",
                    src: "/public/static/dynamics-365businesscentral.png"
                },
                {
                    name: "Dynamics 365 Guides",
                    src: "/public/static/dynamics-365guides.png"
                },
                {
                    name: "Dynamics 365 Layout",
                    src: "/public/static/dynamics-365layout.png"
                },
                {
                    name: "Dynamics 365 Import Tool",
                    src: "/public/static/dynamics-365importtool.png"
                },
                {
                    name: "Dynamics 365 Remote Assist",
                    src: "/public/static/dynamics-365remoteassist.png"
                },
                {
                    name: "Dynamics 365 Product Visualize",
                    src: "/public/static/dynamics-365productvisualize.png"
                }
            ]
        },
        {
            name: "Windows",
            icons: [
                {
                    name: "Mail",
                    src:"/public/static/win-mail.png"
                },
                {
                    name: "Calendar",
                    src:"/public/static/win-calendar.png"
                },
                {
                    name: "People",
                    src:"/public/static/win-people.png"
                },
                {
                    name: "Groove Music",
                    src:"/public/static/win-groove.png"
                },
                {
                    name: "Movies & TV",
                    src:"/public/static/win-moviestv.png"
                },
                {
                    name: "Photos",
                    src:"/public/static/win-photos.png"
                },
                {
                    name: "Calculator",
                    src:"/public/static/win-calculator.png"
                },
                {
                    name: "Camera",
                    src:"/public/static/win-camera.png"
                },
                {
                    name: "Clock",
                    src:"/public/static/win-clock.png"
                },
                {
                    name: "Recorder",
                    src:"/public/static/win-recorder.png"
                },
                {
                    name: "Snip & Sketch",
                    src:"/public/static/win-snipnsketch.png"
                },
                {
                    name: "Cellular",
                    src:"/public/static/win-cellular.png"
                },
                {
                    name: "Your Phone",
                    src:"/public/static/win-yourphone.png"
                },
                {
                    name: "Maps",
                    src:"/public/static/win-maps.png"
                },
                {
                    name: "Weather",
                    src:"/public/static/win-weather.png"
                },
                {
                    name: "Solitaire",
                    src:"/public/static/win-solitaire.png"
                },
                {
                    name: "Microsoft Edge",
                    src:"/public/static/win-edge.png"
                },
                {
                    name: "Explorer",
                    src:"/public/static/win-explorer.png"
                },
                {
                    name: "Feedback",
                    src:"/public/static/win-feedback.png"
                },
                {
                    name: "Microsoft News",
                    src: "/public/static/win-news.svg"
                }
            ]
        },
        {
            name: "Developer Tools",
            icons: [
                {
                    name: "Terminal",
                    src:"/public/static/win-terminal.png"
                },
                {
                    name: "Visual Studio Code",
                    src:"/public/static/win-vscode.png"
                },
                {
                    name: "Visual Studio",
                    src:"/public/static/win-visualstudio.svg"
                }
            ]
        },
        {
            name: "Mobile",
            icons: [
                {
                    name: "Launcher",
                    src:"/public/static/mobile-launcher.png"
                },
                {
                    name: "Managed Home Screen",
                    src:"/public/static/mobile-enterpriselauncher.png"
                },
                {
                    name: "Your Phone Companion",
                    src:"/public/static/mobile-yourphonecompanion.png"
                },
                {
                    name: "Hyperlapse",
                    src:"/public/static/mobile-hyperlapse.png"
                },
                {
                    name: "Bing Advertising",
                    src:"/public/static/mobile-advertising.png"
                },
                {
                    name: "Kaizala",
                    src:"/public/static/mobile-kaizala.png"
                },
                {
                    name: "Mail",
                    src:"/public/static/mobile-mail.png"
                },
                {
                    name: "Calendar",
                    src:"/public/static/mobile-calendar.png"
                }
            ]
        }
    ]

    return grouped ? icons : [{name: "All", icons: icons.flatMap(g => g.icons)}];
}