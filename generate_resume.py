import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def create_resume():
    pdf_path = os.path.join("public", "Gbemicharles_Resume.pdf")
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        rightMargin=40,
        leftMargin=40,
        topMargin=40,
        bottomMargin=40
    )
    
    styles = getSampleStyleSheet()
    
    # Custom colors matching design system
    primary_color = colors.HexColor("#0f172a") # Dark Navy
    accent_color = colors.HexColor("#0284c7") # Ocean Blue
    text_color = colors.HexColor("#334155") # Slate
    
    title_style = ParagraphStyle(
        'ResumeTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=primary_color,
        spaceAfter=4
    )
    
    subtitle_style = ParagraphStyle(
        'ResumeSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=11,
        leading=14,
        textColor=accent_color,
        spaceAfter=12
    )
    
    contact_style = ParagraphStyle(
        'ResumeContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=colors.HexColor("#475569"),
        spaceAfter=15
    )
    
    section_heading = ParagraphStyle(
        'ResumeSectionHeading',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=16,
        textColor=primary_color,
        spaceAfter=4,
        keepWithNext=True
    )
    
    body_style = ParagraphStyle(
        'ResumeBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=text_color,
        spaceAfter=8
    )
    
    bullet_style = ParagraphStyle(
        'ResumeBullet',
        parent=body_style,
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=4
    )

    story = []
    
    # Name and Header
    story.append(Paragraph("Gbemicharles", title_style))
    story.append(Paragraph("AI & Web3 Full-Stack Developer | Website, Bot & Mini-App Builder", subtitle_style))
    
    # Contact Row
    contact_text = (
        "Email: lordgbemicharles@gmail.com &nbsp;&nbsp;|&nbsp;&nbsp; "
        "Telegram: t.me/gbemicharles &nbsp;&nbsp;|&nbsp;&nbsp; "
        "GitHub: github.com/gbemicharles &nbsp;&nbsp;|&nbsp;&nbsp; "
        "Twitter: @Gbemicharles_ &nbsp;&nbsp;|&nbsp;&nbsp; "
        "Domains: gbemicharles.com / .org / .dev / .ton"
    )
    story.append(Paragraph(contact_text, contact_style))
    
    # Horizontal line
    def draw_line():
        t = Table([['']], colWidths=[letter[0]-80])
        t.setStyle(TableStyle([
            ('LINEBELOW', (0,0), (-1,-1), 1, colors.HexColor("#cbd5e1")),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 0),
        ]))
        return t
        
    story.append(draw_line())
    story.append(Spacer(1, 10))
    
    # Professional Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    summary_text = (
        "Highly skilled AI Expert, Full-Stack Developer, and Web3 Engineer with 9+ years of experience "
        "designing and building responsive websites, custom webpages, Telegram automation bots, and blockchain-integrated "
        "Telegram Mini-Apps (TMAs). An early participant and strategist within the TON ecosystem, leveraging "
        "modern JS/TS frameworks, Python, and AI integrations (LLMs, Vector databases, automated workflows) to bridge "
        "responsive UI/UX with robust decentralized structures."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 8))
    story.append(draw_line())
    story.append(Spacer(1, 10))
    
    # Technical Stack & Skills
    story.append(Paragraph("TECHNICAL SKILLS", section_heading))
    skills_table_data = [
        [Paragraph("<b>Web & App:</b>", body_style), 
         Paragraph("Website Design, Telegram Mini-Apps (TMA), TON Connect, React, Next.js, TypeScript, HTML5, CSS3, Responsive UI/UX, Web Performance", body_style)],
        [Paragraph("<b>Bots & AI:</b>", body_style), 
         Paragraph("Telegram Bot API (Node.js & Python), OpenAI API, LLM Tooling, Semantic Search, Vector DBs, Prompt Engineering, Automation Bots", body_style)],
        [Paragraph("<b>Backend & Core:</b>", body_style), 
         Paragraph("Node.js, Express, Python FastAPI, PostgreSQL, MongoDB, Redis, Docker, Git Version Control, CI/CD Pipelines", body_style)]
    ]
    skills_table = Table(skills_table_data, colWidths=[100, letter[0]-180])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 8))
    story.append(draw_line())
    story.append(Spacer(1, 10))
    
    # Professional Experience
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_heading))
    
    # Job 1
    job1_header = Table([
        [Paragraph("<b>Web3 Software Engineer & Community Strategist</b>", body_style), Paragraph("<b>2024 - Present</b>", ParagraphStyle('RightText', parent=body_style, alignment=2))],
        [Paragraph("<i>Pedro TON (@_PEDROTON)</i>", body_style), Paragraph("<i>TON Ecosystem</i>", ParagraphStyle('RightText2', parent=body_style, alignment=2))]
    ], colWidths=[letter[0]-220, 140])
    job1_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(job1_header)
    story.append(Paragraph("• Engineered responsive Web3 landing pages and custom portal interfaces integrated with wallet protocols.", bullet_style))
    story.append(Paragraph("• Designed and shipped interactive layout components optimized for mobile Telegram browsers.", bullet_style))
    story.append(Paragraph("• Directed social community strategies and structured engagement dashboards to grow the token holder base.", bullet_style))
    story.append(Spacer(1, 6))
    
    # Job 2
    job2_header = Table([
        [Paragraph("<b>Full-Stack Web & App Developer</b>", body_style), Paragraph("<b>2023 - Present</b>", ParagraphStyle('RightText', parent=body_style, alignment=2))],
        [Paragraph("<i>Freelance & AI Engineering Contracts</i>", body_style), Paragraph("<i>Remote</i>", ParagraphStyle('RightText2', parent=body_style, alignment=2))]
    ], colWidths=[letter[0]-220, 140])
    job2_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(job2_header)
    story.append(Paragraph("• Build responsive websites, custom landing pages, and cross-platform layouts using React and Tailwind.", bullet_style))
    story.append(Paragraph("• Develop custom Telegram Mini-Apps (TMAs) with @tonconnect wallet synchronization.", bullet_style))
    story.append(Paragraph("• Program Telegram automation bots and integrate OpenAI API nodes for intelligent FAQ and group moderators.", bullet_style))
    story.append(Spacer(1, 8))
    story.append(draw_line())
    story.append(Spacer(1, 10))
    
    # Education & Certifications
    story.append(Paragraph("EDUCATION & CERTIFICATIONS", section_heading))
    
    edu_table_data = [
        [
            Paragraph("<b>ND & HND in Computer Science</b><br/><i>Computer Science Studies (Institution Unspecified)</i>", body_style),
            Paragraph("<b>2018 - 2023</b>", ParagraphStyle('RightText3', parent=body_style, alignment=2))
        ],
        [
            Paragraph("<b>Certificate in Mobile App Development</b><br/><i>AstraTech</i>", body_style),
            Paragraph("<b>2022</b>", ParagraphStyle('RightText4', parent=body_style, alignment=2))
        ]
    ]
    edu_table = Table(edu_table_data, colWidths=[letter[0]-180, 100])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(edu_table)
    
    doc.build(story)
    print("Resume PDF successfully built at:", pdf_path)

if __name__ == "__main__":
    create_resume()
