import WidgetBot from '@widgetbot/react-embed';

export function DiscordChat() {
  return (
    <div style={{ width: '100%', height: '700px' }}>
      <WidgetBot
        server="1435463197418192906"
        channel="1435463198839935032"
        width="100%"
        height="100%"
      />
    </div>
  );
}
