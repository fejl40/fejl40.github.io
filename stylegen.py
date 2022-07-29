import os



def stylespaste(list):
    for i in list:
        prestripped = i.replace(".jpg", "")
        stripped = prestripped.replace("_2", "")
        x = """
        .{filename} {forwardBracket}
            width: 1280px;
            height: 960px;
            background: url("../maps/dust2/{filename}.jpg") no-repeat;
            display: inline-block;
        {BackBracket}
        .{filename}:hover {forwardBracket}
            background: url("../../maps/dust2/{filename}_2.jpg") no-repeat;
        {BackBracket}
        """.format(BackBracket= "}", forwardBracket = "{", filename=stripped)
        print(x)

def body(list):
    for i in list:
        stripped = i.replace(".jpg", "")
        x = """
        <h1>{filename}</h1>
        <div class="{filename}"></div>
        <br>
        <button type="button" onclick="topFunction()">Top</button>
        <br>
        """.format(filename = stripped)
        print(x)


def scrollList(list):
    print("<ul>")
    for i in list:
        stripped = i.replace(".jpg", "")
        x = """<li>{filename}</li>""".format(filename=stripped)
        print(x)
    print("</ul>")
def main():
    files = os.listdir("/Users/krois/Downloads/dust2")
    ##husk at skifte "maps/MAPNAVN" i background
    stylespaste(files)
    #body(files)
    #scrollList(files)

if __name__ == "__main__":
    main()
