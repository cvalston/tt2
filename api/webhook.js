const { Telegraf } = require('telegraf');
const { createClient } = require('@supabase/supabase-js');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

bot.on('message', async (ctx) => {
  const text = ctx.message.text || ctx.message.caption || '';
  if (!text) return;

  const title = text.slice(0, 60);

  const { error } = await supabase.from('ideas').insert({
    title,
    summary: text,
    status: 'raw',
    source: 'Telegram',
  });

  if (error) {
    console.error('Supabase insert error:', error);
    await ctx.reply('❌ Failed to capture idea. Please try again.');
    return;
  }

  await ctx.reply('✅ Idea captured');
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(200).send('OK');
    return;
  }
  try {
    await bot.handleUpdate(req.body);
    res.status(200).send('OK');
  } catch (err) {
    console.error('Webhook error:', err);
    res.status(500).send('Error');
  }
};
