from pathlib import Path
import sys
import textwrap

ROOT = Path(__file__).resolve().parents[1]
VENDOR = ROOT / ".codex_pdf_vendor"
sys.path.insert(0, str(VENDOR))

from reportlab.lib import colors
from reportlab.lib.pagesizes import landscape
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader


OUT_DIR = ROOT / "output" / "pdf"
OUT_DIR.mkdir(parents=True, exist_ok=True)

PDF_PATH = OUT_DIR / "GoldenFrame_business_intro.pdf"
MD_PATH = OUT_DIR / "GoldenFrame_business_intro.md"

PAGE_W, PAGE_H = landscape((210 * mm, 118.125 * mm))
M = 15 * mm

FONT_REG = "DengXian"
FONT_BOLD = "DengXian-Bold"
pdfmetrics.registerFont(TTFont(FONT_REG, r"C:\Windows\Fonts\Deng.ttf"))
pdfmetrics.registerFont(TTFont(FONT_BOLD, r"C:\Windows\Fonts\Dengb.ttf"))


IMG = {
    "graduation": ROOT / "青春校园风graduation" / "public" / "assets" / "graduation" / "hero" / "hero-bg.jpg",
    "graduation2": ROOT / "青春校园风graduation" / "public" / "assets" / "graduation" / "featured" / "01.jpg",
    "wedding": ROOT / "wedding" / "封面" / "pexels-mlkbnl-10074778.jpg",
    "wedding2": ROOT / "wedding" / "婚纱写真" / "pexels-dothanhyb-5788395.jpg",
    "baby": ROOT / "baby" / "封面" / "pexels-theamritdev-18671559.jpg",
    "baby2": ROOT / "baby" / "百日" / "pexels-foden-nguyen-81016607-35147775.jpg",
}


slides = [
    {
        "title": "GoldenFrame",
        "kicker": "More Than An Album",
        "subtitle": "数字纪念馆平台",
        "body": ["将照片升级为可分享、可传播、具有仪式感的数字纪念馆"],
        "layout": "cover",
        "images": ["graduation", "wedding", "baby"],
        "notes": "首屏使用三张大图拼贴：毕业纪念馆、婚礼纪念馆、宝宝成长馆；左侧放品牌名与标语，右侧为沉浸式照片墙。",
    },
    {
        "title": "01 行业现状",
        "kicker": "交付已经完成，但价值没有被充分呈现",
        "body": [
            "多数摄影交付仍停留在发图与存储层面：微信发图、百度网盘、U盘、小程序相册。",
            "这些方式方便，但缺少一个被客户反复打开、愿意分享、能够代表品牌质感的展示空间。",
        ],
        "bullets": ["缺乏仪式感", "客户查看次数少", "不利于传播", "无法形成品牌曝光"],
        "layout": "problem",
        "notes": "左侧为现状判断，右侧用四个轻量信息块展示问题；背景可用低饱和相册/手机浏览场景图。",
    },
    {
        "title": "02 GoldenFrame 是什么",
        "kicker": "一句话介绍",
        "quote": "GoldenFrame 将照片升级为专属数字纪念馆。",
        "bullets": ["专属网址", "高级展示页面", "手机访问", "长期保存", "一键分享"],
        "layout": "quote",
        "notes": "居中一句话大标题，下方用 5 个精致标签展示客户获得的结果；右侧放手机页面效果图或纪念馆首页截图。",
    },
    {
        "title": "03 核心价值 - 对客户",
        "kicker": "从收到照片，到拥有一座纪念馆",
        "body": [
            "客户不再只是下载照片，而是收到一个专属于自己的纪念空间。",
            "它可以被收藏、转发给亲友，也可以在重要日期重新打开，形成更强的情绪价值与拥有感。",
        ],
        "bullets": ["交付更有仪式感", "手机访问更轻松", "亲友分享更自然", "重要记忆长期可见"],
        "layout": "value",
        "notes": "左文右图。建议使用客户在手机上浏览照片馆的生活化图片，突出情绪与仪式感。",
    },
    {
        "title": "03 核心价值 - 对摄影师",
        "kicker": "让作品被看见得更久，也传播得更远",
        "body": [
            "摄影师的交付不再止于一次文件发送，而是变成一个可被转发的作品入口。",
            "每一次客户分享，都是一次自然的作品展示和口碑推荐。",
        ],
        "bullets": ["提升交付质感", "增强作品传播", "承接转介绍线索", "为增值套餐提供理由"],
        "layout": "value",
        "notes": "右侧可放摄影师精选作品墙或手机分享界面，体现作品资产被持续曝光。",
    },
    {
        "title": "03 核心价值 - 对影楼",
        "kicker": "把数字纪念馆做成可销售的增值服务",
        "body": [
            "GoldenFrame 可以作为毕业季、婚礼、亲子、写真套餐中的升级项。",
            "影楼获得新的服务卖点，也让品牌在客户分享链路中持续出现。",
        ],
        "bullets": ["提高套餐溢价", "拉开同质化竞争", "增加客户满意度", "强化品牌记忆"],
        "layout": "value",
        "notes": "建议用商业提案式左右分栏：左侧商业收益，右侧展示品牌露出位置与套餐升级路径。",
    },
    {
        "title": "04 模板展示 - Template A",
        "kicker": "高级极简风",
        "body": ["高级、克制、Apple 风。用大留白、大图与精简文字，让照片本身成为主角。"],
        "bullets": ["适用：毕业写真", "适用：高端写真"],
        "layout": "template",
        "image": "graduation2",
        "notes": "全幅大图配左下角小标题，页面留白充足；适合展示高端写真、个人毕业照、艺术肖像。",
    },
    {
        "title": "04 模板展示 - Template B",
        "kicker": "青春纪念册风",
        "body": ["青春、胶片感、毕业册。适合把一群人的校园故事组织成可翻阅的数字纪念册。"],
        "bullets": ["适用：毕业季", "适用：宿舍照", "适用：班级照"],
        "layout": "template",
        "image": "graduation",
        "notes": "使用拼贴式照片墙和胶片边框元素；建议右侧放宿舍/班级照片组合，左侧放模板特点。",
    },
    {
        "title": "04 模板展示 - Template C",
        "kicker": "Wedding Luxe",
        "body": ["婚礼杂志、仪式感、电影感。把婚礼当天从入场、仪式到亲友祝福整理成一份高级电子刊物。"],
        "bullets": ["适用：婚礼", "适用：婚纱摄影"],
        "layout": "template",
        "image": "wedding2",
        "notes": "杂志封面式大图，配细线与英文小标题；可使用婚礼主视觉或新人合影作为主图。",
    },
    {
        "title": "04 模板展示 - Template D",
        "kicker": "Baby Storybook",
        "body": ["成长册、温暖、亲子记录。把百日照、周岁照、家庭照串联成一段可持续更新的成长故事。"],
        "bullets": ["适用：百日照", "适用：周岁照", "适用：成长记录"],
        "layout": "template",
        "image": "baby2",
        "notes": "柔和背景与故事书式版面，图片可放在右侧大圆角画框；文字保持温暖、轻盈。",
    },
    {
        "title": "05 使用场景",
        "kicker": "覆盖高频拍摄业务，适合做成套餐升级项",
        "bullets": ["毕业纪念馆", "婚礼纪念馆", "宝宝成长馆", "情侣写真馆", "宿舍纪念馆", "班级纪念馆"],
        "layout": "grid",
        "notes": "六宫格场景卡片，每张卡片配一张对应照片；版式建议干净紧凑，方便客户快速对号入座。",
    },
    {
        "title": "06 产品功能",
        "kicker": "客户看到的是体验，商家得到的是传播入口",
        "bullets": ["高清图片展示", "视频展示", "分类浏览", "个人写真", "宿舍记忆", "班级合影", "分享传播", "品牌展示"],
        "layout": "features",
        "notes": "使用 2 行 4 列功能卡；每个功能配简单图标感线框，不强调技术，只强调客户可感知结果。",
    },
    {
        "title": "07 GoldenFrame 服务流程",
        "kicker": "从素材到上线，流程清晰可控",
        "steps": ["客户提出需求", "确定制作风格与理想效果", "摄影师提供照片素材", "GoldenFrame 制作数字纪念馆", "客户审核并提出修改意见", "完成优化调整", "正式交付上线"],
        "layout": "process",
        "notes": "横向流程图，7 个节点从左到右排列；每个节点用简短动词表达，强调专业交付节奏。",
    },
    {
        "title": "07 流程说明",
        "kicker": "每一步都围绕交付质感与客户确认",
        "bullets": [
            "客户提出需求：明确纪念馆类型、使用场景、上线时间与品牌露出需求。",
            "确定制作风格与理想效果：从模板中选择方向，确认高级极简、青春纪念册、婚礼杂志或亲子成长册等风格。",
            "摄影师提供照片素材：按封面、精选、分类相册、视频等内容准备素材。",
            "GoldenFrame 制作数字纪念馆：完成页面编排、照片呈现、内容分组与分享入口设置。",
            "客户审核并提出修改意见：集中确认文字、图片顺序、分类名称和整体观感。",
            "完成优化调整：根据反馈进行细节优化，确保手机访问和展示效果稳定。",
            "正式交付上线：生成专属网址，可直接发送客户、亲友或用于品牌展示。",
        ],
        "layout": "process_detail",
        "notes": "左侧放流程说明，右侧放上线前检查清单；版式偏 Notion 风，适合给客户解释合作方式。",
    },
    {
        "title": "08 为什么选择 GoldenFrame",
        "kicker": "从文件交付，升级为品牌化体验交付",
        "table": [
            ["维度", "传统网盘交付", "GoldenFrame 数字纪念馆"],
            ["仪式感", "像一次文件接收", "像收到一份专属作品"],
            ["传播性", "转发意愿弱", "可一键分享给亲友"],
            ["品牌曝光", "品牌存在感低", "每次打开都有品牌记忆"],
            ["长期保存", "容易遗忘或丢失链接", "专属网址长期可访问"],
            ["客户体验", "下载、查找、筛选成本高", "手机浏览顺滑，分类清晰"],
        ],
        "layout": "comparison",
        "notes": "使用三列表格。中间列保持克制灰色，GoldenFrame 列使用强调色和更清晰的收益表达。",
    },
    {
        "title": "09 商业价值",
        "kicker": "让一次拍摄，拥有更多可被销售和传播的价值",
        "body": [
            "对摄影师：数字纪念馆可以作为高阶交付项，提升套餐层级和客单价。",
            "对影楼：它适合打包进毕业季、婚礼、亲子和写真业务，成为差异化增值服务。",
            "对客户传播：客户愿意分享的不是下载链接，而是一份好看、有仪式感、能代表自己的纪念空间。",
        ],
        "bullets": ["提升客单价", "增加增值服务收入", "形成自然二次传播", "提升品牌高级感"],
        "layout": "business",
        "notes": "建议使用三段式商业价值卡片：提价、增值、传播；右侧可放分享路径示意。",
    },
    {
        "title": "10 未来方向",
        "kicker": "围绕更多风格、更多场景、更多展示形式持续扩展",
        "bullets": ["更多风格模板", "更多行业场景", "更丰富的展示形式"],
        "layout": "future",
        "notes": "保持简洁，不写复杂规划；可用三张小卡片配抽象视觉，表达产品会持续丰富。",
    },
    {
        "title": "GoldenFrame",
        "kicker": "More Than An Album",
        "subtitle": "让每一段珍贵记忆，都拥有属于自己的展示空间。",
        "layout": "back",
        "image": "wedding",
        "notes": "封底使用一张情绪充足的大图做背景，品牌名居中，底部预留联系方式或试用二维码位置。",
    },
]


def hex_color(v):
    v = v.lstrip("#")
    return colors.HexColor("#" + v)


INK = hex_color("#171717")
MUTED = hex_color("#6F6F6F")
SOFT = hex_color("#F6F4EF")
LINE = hex_color("#E6E1D8")
GOLD = hex_color("#B58A44")
WARM = hex_color("#FBFAF7")
GREEN = hex_color("#667761")


def set_font(c, name=FONT_REG, size=10, color=INK):
    c.setFont(name, size)
    c.setFillColor(color)


def wrap_line(text, font, size, max_width):
    lines = []
    current = ""
    for ch in text:
        test = current + ch
        if pdfmetrics.stringWidth(test, font, size) <= max_width:
            current = test
        else:
            if current:
                lines.append(current)
            current = ch
    if current:
        lines.append(current)
    return lines


def draw_text(c, text, x, y, max_width, size=10, leading=None, font=FONT_REG, color=INK):
    leading = leading or size * 1.6
    set_font(c, font, size, color)
    lines = []
    for para in text if isinstance(text, list) else [text]:
        lines.extend(wrap_line(para, font, size, max_width))
        lines.append("")
    if lines and lines[-1] == "":
        lines.pop()
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_image_cover(c, path, x, y, w, h, radius=0):
    if not path.exists():
        c.setFillColor(SOFT)
        c.roundRect(x, y, w, h, radius, fill=1, stroke=0)
        return
    img = ImageReader(str(path))
    iw, ih = img.getSize()
    scale = max(w / iw, h / ih)
    sw, sh = iw * scale, ih * scale
    sx, sy = x + (w - sw) / 2, y + (h - sh) / 2
    c.saveState()
    p = c.beginPath()
    p.roundRect(x, y, w, h, radius)
    c.clipPath(p, stroke=0, fill=0)
    c.drawImage(img, sx, sy, sw, sh, preserveAspectRatio=False, mask="auto")
    c.restoreState()


def draw_header(c, slide, page_num):
    set_font(c, FONT_REG, 7.5, MUTED)
    c.drawString(M, PAGE_H - 10 * mm, "GoldenFrame")
    c.drawRightString(PAGE_W - M, PAGE_H - 10 * mm, f"{page_num:02d} / {len(slides):02d}")


def draw_title(c, title, kicker=None, x=M, y=None, w=82 * mm):
    y = y or PAGE_H - 24 * mm
    if kicker:
        set_font(c, FONT_BOLD, 8.5, GOLD)
        c.drawString(x, y, kicker)
        y -= 9 * mm
    set_font(c, FONT_BOLD, 21, INK)
    y = draw_text(c, title, x, y, w, 21, 25, FONT_BOLD, INK)
    return y


def draw_bullets(c, bullets, x, y, max_width, size=10.5, gap=11 * mm, accent=GOLD):
    for b in bullets:
        c.setFillColor(accent)
        c.circle(x + 1.6 * mm, y + 1.8 * mm, 1.2 * mm, fill=1, stroke=0)
        y = draw_text(c, b, x + 6 * mm, y, max_width - 6 * mm, size, size * 1.55, FONT_REG, INK)
        y -= gap - size * 0.75
    return y


def draw_pill(c, text, x, y, w, h, fill=colors.white, stroke=LINE, color=INK):
    c.setFillColor(fill)
    c.setStrokeColor(stroke)
    c.roundRect(x, y, w, h, 4 * mm, fill=1, stroke=1)
    set_font(c, FONT_BOLD, 9, color)
    c.drawCentredString(x + w / 2, y + h / 2 - 3, text)


def page_cover(c, slide):
    c.setFillColor(WARM)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    x0 = PAGE_W * 0.48
    draw_image_cover(c, IMG["graduation"], x0, PAGE_H * 0.46, PAGE_W * 0.24, PAGE_H * 0.42, 5 * mm)
    draw_image_cover(c, IMG["wedding"], x0 + PAGE_W * 0.25, PAGE_H * 0.37, PAGE_W * 0.21, PAGE_H * 0.51, 5 * mm)
    draw_image_cover(c, IMG["baby"], x0 + PAGE_W * 0.08, PAGE_H * 0.08, PAGE_W * 0.34, PAGE_H * 0.32, 5 * mm)
    set_font(c, FONT_BOLD, 35, INK)
    c.drawString(M, PAGE_H - 37 * mm, "GoldenFrame")
    set_font(c, FONT_BOLD, 12, GOLD)
    c.drawString(M, PAGE_H - 48 * mm, "More Than An Album")
    set_font(c, FONT_REG, 15, INK)
    c.drawString(M, PAGE_H - 64 * mm, "数字纪念馆平台")
    draw_text(c, slide["body"][0], M, PAGE_H - 79 * mm, 84 * mm, 12, 19, FONT_REG, MUTED)
    for i, t in enumerate(["毕业纪念馆", "婚礼纪念馆", "宝宝成长馆"]):
        draw_pill(c, t, M + i * 30 * mm, 15 * mm, 26 * mm, 9 * mm, colors.white, LINE, INK)


def page_problem(c, slide):
    draw_header(c, slide, slides.index(slide) + 1)
    y = draw_title(c, slide["title"], slide["kicker"], w=98 * mm)
    y -= 3 * mm
    y = draw_text(c, slide["body"], M, y, 92 * mm, 10.8, 17, FONT_REG, MUTED)
    labels = ["微信发图", "百度网盘", "U盘", "小程序相册"]
    for i, lab in enumerate(labels):
        draw_pill(c, lab, M + (i % 2) * 32 * mm, 18 * mm + (i // 2) * 12 * mm, 28 * mm, 9 * mm)
    x = PAGE_W - M - 78 * mm
    for i, b in enumerate(slide["bullets"]):
        yy = PAGE_H - 34 * mm - i * 18 * mm
        c.setFillColor(colors.white)
        c.roundRect(x, yy - 8 * mm, 78 * mm, 13 * mm, 4 * mm, fill=1, stroke=0)
        c.setStrokeColor(LINE)
        c.roundRect(x, yy - 8 * mm, 78 * mm, 13 * mm, 4 * mm, fill=0, stroke=1)
        set_font(c, FONT_BOLD, 10.5, INK)
        c.drawString(x + 8 * mm, yy - 1 * mm, b)


def page_quote(c, slide):
    draw_header(c, slide, slides.index(slide) + 1)
    draw_title(c, slide["title"], slide["kicker"], w=80 * mm)
    set_font(c, FONT_BOLD, 25, INK)
    draw_text(c, slide["quote"], M, PAGE_H - 54 * mm, 112 * mm, 25, 32, FONT_BOLD, INK)
    for i, b in enumerate(slide["bullets"]):
        draw_pill(c, b, M + (i % 3) * 34 * mm, 18 * mm + (i // 3) * 12 * mm, 30 * mm, 9 * mm)
    draw_image_cover(c, IMG["graduation"], PAGE_W - M - 58 * mm, 24 * mm, 58 * mm, 70 * mm, 7 * mm)


def page_value(c, slide):
    draw_header(c, slide, slides.index(slide) + 1)
    y = draw_title(c, slide["title"], slide["kicker"], w=95 * mm)
    y -= 2 * mm
    y = draw_text(c, slide["body"], M, y, 86 * mm, 10.6, 16.5, FONT_REG, MUTED)
    draw_bullets(c, slide["bullets"], M, y - 4 * mm, 86 * mm, 10.2)
    img = "graduation2" if "客户" in slide["title"] else "wedding2" if "摄影师" in slide["title"] else "baby"
    draw_image_cover(c, IMG[img], PAGE_W - M - 72 * mm, 22 * mm, 72 * mm, 74 * mm, 6 * mm)


def page_template(c, slide):
    draw_image_cover(c, IMG[slide["image"]], PAGE_W * 0.44, 0, PAGE_W * 0.56, PAGE_H, 0)
    c.setFillColor(colors.Color(1, 1, 1, alpha=0.86))
    c.roundRect(M, 18 * mm, 82 * mm, 78 * mm, 5 * mm, fill=1, stroke=0)
    y = PAGE_H - 31 * mm
    set_font(c, FONT_BOLD, 8.5, GOLD)
    c.drawString(M + 8 * mm, y, slide["kicker"])
    y -= 12 * mm
    display_title = slide["title"].split(" - ")[-1]
    draw_text(c, display_title, M + 8 * mm, y, 64 * mm, 22, 26, FONT_BOLD, INK)
    y -= 21 * mm
    y = draw_text(c, slide["body"], M + 8 * mm, y, 62 * mm, 10.2, 16, FONT_REG, MUTED)
    draw_bullets(c, slide["bullets"], M + 8 * mm, y - 2 * mm, 60 * mm, 9.5, 9 * mm)


def page_grid(c, slide):
    draw_header(c, slide, slides.index(slide) + 1)
    draw_title(c, slide["title"], slide["kicker"], w=115 * mm)
    cols = 3
    card_w, card_h = 52 * mm, 24 * mm
    start_x, start_y = M, PAGE_H - 68 * mm
    image_keys = ["graduation", "wedding", "baby", "wedding2", "graduation2", "graduation"]
    for i, b in enumerate(slide["bullets"]):
        x = start_x + (i % cols) * (card_w + 8 * mm)
        y = start_y - (i // cols) * (card_h + 8 * mm)
        draw_image_cover(c, IMG[image_keys[i]], x, y, card_w, card_h, 4 * mm)
        c.setFillColor(colors.Color(0, 0, 0, alpha=0.35))
        c.roundRect(x, y, card_w, card_h, 4 * mm, fill=1, stroke=0)
        set_font(c, FONT_BOLD, 12, colors.white)
        c.drawString(x + 6 * mm, y + 8 * mm, b)


def page_features(c, slide):
    draw_header(c, slide, slides.index(slide) + 1)
    draw_title(c, slide["title"], slide["kicker"], w=120 * mm)
    cols = 4
    card_w, card_h = 38 * mm, 22 * mm
    sx, sy = M, PAGE_H - 66 * mm
    for i, b in enumerate(slide["bullets"]):
        x = sx + (i % cols) * (card_w + 7 * mm)
        y = sy - (i // cols) * (card_h + 8 * mm)
        c.setFillColor(colors.white)
        c.roundRect(x, y, card_w, card_h, 4 * mm, fill=1, stroke=0)
        c.setStrokeColor(LINE)
        c.roundRect(x, y, card_w, card_h, 4 * mm, fill=0, stroke=1)
        c.setFillColor(GOLD)
        c.circle(x + 8 * mm, y + 13 * mm, 2.1 * mm, fill=1, stroke=0)
        set_font(c, FONT_BOLD, 10.3, INK)
        c.drawString(x + 14 * mm, y + 11 * mm, b)


def page_process(c, slide):
    draw_header(c, slide, slides.index(slide) + 1)
    draw_title(c, slide["title"], slide["kicker"], w=120 * mm)
    steps = slide["steps"]
    start_x, y = M, PAGE_H - 70 * mm
    step_w, gap = 24 * mm, 2 * mm
    for i, s in enumerate(steps):
        x = start_x + i * (step_w + gap)
        c.setFillColor(colors.white)
        c.setStrokeColor(GOLD if i in [0, 6] else LINE)
        c.roundRect(x, y, step_w, 24 * mm, 4 * mm, fill=1, stroke=1)
        set_font(c, FONT_BOLD, 7.0, GOLD)
        c.drawCentredString(x + step_w / 2, y + 16 * mm, f"{i+1:02d}")
        label = "GoldenFrame\n制作数字纪念馆" if s == "GoldenFrame 制作数字纪念馆" else s
        parts = label.split("\n")
        ty = y + 11 * mm
        for part in parts:
            ty = draw_text(c, part, x + 3 * mm, ty, step_w - 6 * mm, 7.4, 9.0, FONT_BOLD, INK)
        if i < len(steps) - 1:
            c.setStrokeColor(GOLD)
            c.line(x + step_w + 1 * mm, y + 12 * mm, x + step_w + gap - 1 * mm, y + 12 * mm)


def page_process_detail(c, slide):
    draw_header(c, slide, slides.index(slide) + 1)
    draw_title(c, slide["title"], slide["kicker"], w=116 * mm)
    x, y = M, PAGE_H - 53 * mm
    for i, b in enumerate(slide["bullets"]):
        c.setFillColor(GOLD)
        c.circle(x + 2 * mm, y + 2 * mm, 1.25 * mm, fill=1, stroke=0)
        y = draw_text(c, b, x + 6 * mm, y, 168 * mm, 8.7, 12.2, FONT_REG, INK)
        y -= 2.2 * mm


def page_comparison(c, slide):
    draw_header(c, slide, slides.index(slide) + 1)
    draw_title(c, slide["title"], slide["kicker"], w=128 * mm)
    table = slide["table"]
    x, y = M, PAGE_H - 55 * mm
    widths = [38 * mm, 62 * mm, 78 * mm]
    row_h = 11 * mm
    for r, row in enumerate(table):
        xx = x
        for col, txt in enumerate(row):
            fill = INK if r == 0 else (hex_color("#F2EFE8") if col == 1 else colors.white)
            if col == 2 and r > 0:
                fill = hex_color("#FFFDF8")
            c.setFillColor(fill)
            c.rect(xx, y - r * row_h, widths[col], row_h, fill=1, stroke=0)
            c.setStrokeColor(LINE)
            c.rect(xx, y - r * row_h, widths[col], row_h, fill=0, stroke=1)
            set_font(c, FONT_BOLD if r == 0 or col == 0 else FONT_REG, 8.5, colors.white if r == 0 else INK)
            draw_text(c, txt, xx + 3 * mm, y - r * row_h + 7 * mm, widths[col] - 6 * mm, 8.3, 9, FONT_BOLD if r == 0 or col == 0 else FONT_REG, colors.white if r == 0 else INK)
            xx += widths[col]


def page_business(c, slide):
    draw_header(c, slide, slides.index(slide) + 1)
    draw_title(c, slide["title"], slide["kicker"], w=136 * mm)
    x, y = M, PAGE_H - 58 * mm
    card_w = 52 * mm
    for i, para in enumerate(slide["body"]):
        xx = x + i * (card_w + 8 * mm)
        c.setFillColor(colors.white)
        c.roundRect(xx, y - 38 * mm, card_w, 38 * mm, 4 * mm, fill=1, stroke=0)
        c.setStrokeColor(LINE)
        c.roundRect(xx, y - 38 * mm, card_w, 38 * mm, 4 * mm, fill=0, stroke=1)
        draw_text(c, para, xx + 5 * mm, y - 8 * mm, card_w - 10 * mm, 9.5, 14.2, FONT_REG, INK)
    for i, b in enumerate(slide["bullets"]):
        draw_pill(c, b, M + i * 43 * mm, 14 * mm, 38 * mm, 9 * mm, hex_color("#FFFDF8"), LINE, INK)


def page_future(c, slide):
    draw_header(c, slide, slides.index(slide) + 1)
    draw_title(c, slide["title"], slide["kicker"], w=138 * mm)
    for i, b in enumerate(slide["bullets"]):
        x = M + i * 58 * mm
        y = PAGE_H - 75 * mm
        c.setFillColor(colors.white)
        c.roundRect(x, y, 50 * mm, 36 * mm, 5 * mm, fill=1, stroke=0)
        c.setStrokeColor(LINE)
        c.roundRect(x, y, 50 * mm, 36 * mm, 5 * mm, fill=0, stroke=1)
        c.setFillColor([GOLD, GREEN, INK][i])
        c.circle(x + 25 * mm, y + 23 * mm, 4 * mm, fill=1, stroke=0)
        set_font(c, FONT_BOLD, 12, INK)
        c.drawCentredString(x + 25 * mm, y + 11 * mm, b)


def page_back(c, slide):
    draw_image_cover(c, IMG[slide["image"]], 0, 0, PAGE_W, PAGE_H, 0)
    c.setFillColor(colors.Color(0, 0, 0, alpha=0.42))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    set_font(c, FONT_BOLD, 32, colors.white)
    c.drawCentredString(PAGE_W / 2, PAGE_H / 2 + 15 * mm, "GoldenFrame")
    set_font(c, FONT_BOLD, 12, colors.white)
    c.drawCentredString(PAGE_W / 2, PAGE_H / 2 + 2 * mm, "More Than An Album")
    set_font(c, FONT_REG, 13, colors.white)
    c.drawCentredString(PAGE_W / 2, PAGE_H / 2 - 17 * mm, slide["subtitle"])
    c.setStrokeColor(colors.white)
    c.roundRect(PAGE_W / 2 - 25 * mm, 16 * mm, 50 * mm, 12 * mm, 3 * mm, fill=0, stroke=1)
    set_font(c, FONT_REG, 9, colors.white)
    c.drawCentredString(PAGE_W / 2, 20 * mm, "预留试用二维码 / 联系方式")


def generic_page(c, slide):
    layouts = {
        "cover": page_cover,
        "problem": page_problem,
        "quote": page_quote,
        "value": page_value,
        "template": page_template,
        "grid": page_grid,
        "features": page_features,
        "process": page_process,
        "process_detail": page_process_detail,
        "comparison": page_comparison,
        "business": page_business,
        "future": page_future,
        "back": page_back,
    }
    c.setFillColor(WARM)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    layouts[slide["layout"]](c, slide)


def write_markdown():
    lines = [
        "# GoldenFrame 商业介绍 PPT Markdown",
        "",
        "品牌标语：More Than An Album",
        "",
        "副标题：将照片升级为可分享、可传播、具有仪式感的数字纪念馆",
        "",
    ]
    for i, s in enumerate(slides, 1):
        lines += [f"## 第 {i:02d} 页 - {s['title']}", ""]
        if s.get("kicker"):
            lines += [f"**页面主题：** {s['kicker']}", ""]
        if s.get("subtitle"):
            lines += [f"**副标题：** {s['subtitle']}", ""]
        if s.get("quote"):
            lines += [f"> {s['quote']}", ""]
        for p in s.get("body", []):
            lines += [p, ""]
        if s.get("bullets"):
            lines += ["**页面要点：**"]
            lines += [f"* {b}" for b in s["bullets"]]
            lines += [""]
        if s.get("steps"):
            lines += ["**服务流程：**"]
            lines += [f"{idx}. {step}" for idx, step in enumerate(s["steps"], 1)]
            lines += [""]
        if s.get("table"):
            lines += ["**对比表：**", "", "| " + " | ".join(s["table"][0]) + " |", "|" + "|".join(["---"] * len(s["table"][0])) + "|"]
            for row in s["table"][1:]:
                lines += ["| " + " | ".join(row) + " |"]
            lines += [""]
        lines += [f"**推荐配图与版式建议：** {s['notes']}", "", "---", ""]
    MD_PATH.write_text("\n".join(lines), encoding="utf-8")


def build_pdf():
    c = canvas.Canvas(str(PDF_PATH), pagesize=(PAGE_W, PAGE_H))
    c.setTitle("GoldenFrame 商业介绍")
    c.setAuthor("GoldenFrame")
    for slide in slides:
        generic_page(c, slide)
        c.showPage()
    c.save()


if __name__ == "__main__":
    write_markdown()
    build_pdf()
    print(PDF_PATH)
    print(MD_PATH)
