const videos = [
        {
          title: "Video 1",
          link: "https://video.twimg.com/amplify_video/1875607607882264577/vid/avc1/720x720/i3giUX7EemigmNkQ.mp4",
        },
        {
          title: "Video 2",
          link: "https://video.twimg.com/amplify_video/1780060994212933633/vid/avc1/1132x720/4jD9FcIql3vc5dxP.mp4",
        },
        {
          title: "Video 3",
          link: "https://video.twimg.com/ext_tw_video/1735663459239436288/pu/vid/avc1/270x480/wfD16CyAxJJY6Lwa.mp4",
        },
        {
          title: "Video 4",
          link: "https://video.twimg.com/amplify_video/1936155184167587840/vid/avc1/480x852/PMl_4A3eVu0okhRc.mp4",
        },
        {
          title: "Video 5",
          link: "https://video.twimg.com/amplify_video/1935993730328072192/vid/avc1/720x1280/Y-qIP7VBIra3UIvk.mp4",
        },
        {
          title: "Video 6",
          link: "https://video.twimg.com/amplify_video/1936932538812858368/vid/avc1/360x640/PO7_uqqVfr3Naop8.mp4",
        },
        {
          title: "Video 7",
          link: "https://video.twimg.com/amplify_video/1882932686337314816/vid/avc1/720x1280/J3IDhGsZtgF4WQyO.mp4",
        },
        {
          title: "Video 8",
          link: "https://video.twimg.com/ext_tw_video/1844545817761415168/pu/vid/avc1/868x720/9-Q66GYt1F-uijTm.mp4",
        },
        {
          title: "Video 9",
          link: "https://video.twimg.com/amplify_video/1934787094184128512/vid/avc1/1080x1920/BphNq-dJ3HRbCRxc.mp4",
        },
        {
          title: "Video 10",
          link: "https://video.twimg.com/ext_tw_video/1937884926705045504/pu/vid/avc1/1280x720/6GH_PqucVbOEc1_A.mp4",
        },
        {
          title: "Video 11",
          link: "https://video.twimg.com/amplify_video/1937807655587700736/vid/avc1/360x640/JcbpLWrpgZiriqL9.mp4",
        },
        {
          title: "Video 12",
          link: "https://video.twimg.com/amplify_video/1937810852809191425/vid/avc1/1274x720/2laOtfx6Q8OUCQb_.mp4",
        },
        {
          title: "Video 13",
          link: "https://video.twimg.com/amplify_video/1936793893904801792/vid/avc1/610x1080/miKSITbhe7SD-914.mp4",
        },
        {
          title: "Video 14",
          link: "https://video.twimg.com/amplify_video/1937081291280719872/vid/avc1/1248x720/rLf3ggIGeYeIx45V.mp4",
        },
        {
          title: "Video 15",
          link: "https://video.twimg.com/amplify_video/1937079504276451328/vid/avc1/1280x720/3_6ORJyJUO5IOSzq.mp4",
        },
        {
          title: "Video 16",
          link: "https://video.twimg.com/amplify_video/1935315189366169600/vid/avc1/886x1666/JM2e6V4-FjUoYLmN.mp4",
        },
        {
          title: "Video 17",
          link: "https://video.twimg.com/amplify_video/1934976733859459072/vid/avc1/720x720/rm_HnlJzNDctgn9J.mp4",
        },
        {
          title: "Video 18",
          link: "https://video.twimg.com/ext_tw_video/1936906047957946368/pu/vid/avc1/1280x720/PCLWk1CrzmWr81Ax.mp4",
        },
        {
          title: "Video 19",
          link: "https://video.twimg.com/ext_tw_video/1884393479955992576/pu/vid/avc1/1280x720/Y57RpEAH53kuj_er.mp4",
        },
        {
          title: "Video 20",
          link: "https://video.twimg.com/amplify_video/1912439348106047488/vid/avc1/1280x720/QTMuoBSeYETRiE33.mp4",
        },
        {
          title: "Video 21",
          link: "https://video.twimg.com/amplify_video/1934775013418135552/vid/avc1/720x1280/vmaafitYnhPL6lqP.mp4",
        },
        {
          title: "Video 22",
          link: "https://video.twimg.com/amplify_video/1943229232542625792/vid/avc1/720x1232/lZtHaVhY5HDpqxc-.mp4",
        },
        {
          title: "Video 23",
          link: "https://video.twimg.com/amplify_video/1941497132713689088/vid/avc1/720x1280/sKTaAN7z5E_9vL7C.mp4",
        },
        {
          title: "Video 24",
          link: "https://video.twimg.com/ext_tw_video/1883458385615757312/pu/vid/avc1/720x836/gYB5O8RasNOa_mFW.mp4",
        },
        {
          title: "Video 25",
          link: "https://video.twimg.com/ext_tw_video/1876793702674530304/pu/vid/avc1/720x960/aYRZ5eiTW5hqN06U.mp4",
        },
        {
          title: "Video 26",
          link: "https://video.twimg.com/amplify_video/1846349853728919552/vid/avc1/480x480/1kdm2y5-Oa31Cr36.mp4",
        },
        {
          title: "Video 27",
          link: "https://video.twimg.com/ext_tw_video/1825380538213089280/pu/vid/avc1/720x720/_S4vEp6i4_txg3fh.mp4",
        },
        {
          title: "Video 28",
          link: "https://video.twimg.com/amplify_video/1844219931866562563/vid/avc1/640x360/xFmk6X1TUSPaxAOq.mp4",
        },
        {
          title: "Video 29",
          link: "https://video.twimg.com/amplify_video/1818519581327233024/vid/avc1/640x360/Z-ebDC-VwjYeS8ou.mp4",
        },
        {
          title: "Video 30",
          link: "https://video.twimg.com/ext_tw_video/1784190966133411840/pu/vid/avc1/1280x720/kWZu6HU-o5haUpFv.mp4",
        },
      ];
